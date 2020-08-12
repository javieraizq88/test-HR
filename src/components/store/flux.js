 
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        },
        actions: {
 
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },
 
 
        }
    }
}
export default getState;
 
 
