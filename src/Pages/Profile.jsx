import {useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    const {user, isAuthenticated,isLoading} = useAuth0()
if (isLoading) {
    return <div>Loading...</div>
}
if (!isAuthenticated) {
  return <Navigate to={'/'} replace/>
}

  return (
    isAuthenticated && (
        <div>
            <h2>Profile</h2>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p> {user.email} </p>
        </div>
    )
  )
}

export default Profile