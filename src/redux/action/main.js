import { 
   handleEmailLogin 
} from '../slice/authSlice'

const fetchUsers = () => async (dispatch) => {
    dispatch(usersLoading())
    const response = await usersAPI.fetchAll()
    dispatch(usersReceived(response.data))
  }