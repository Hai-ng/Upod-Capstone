import axios from 'axios';

export const callApi_getListDeviceType = () => {
    return async dispatch => {
        dispatch({
            type:"SET_LOADING",
            isLoading:true
        })
        try {
            let result = await axios({
                url: `https://upod-release.herokuapp.com/api/dervice_types/get_list_device_type`,
                method: 'GET'
            });
            console.log("list device type TEST API", result.data);
            
            dispatch({
                type: 'SET_ListDeviceType',
                arrDeviceType: result.data.data
            })
            
            setTimeout(() => {
                dispatch({
                    type:'SET_LOADING',
                    isLoading:false
                })
            }, 1000);
        } catch (errors) {
            if (errors.response.status === 400) {
                alert('Không hợp lệ!');
            }
        }
    }
}