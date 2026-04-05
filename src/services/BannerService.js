
import api from "./api"

export const GetBanner=async ()=>{
    try {
        const response= await api.get('/banner');
        const banners=response.data.data;

        if(response.status==200){
            return banners
        }
    } catch (error) {
        console.log(error)
    }
}

export const createBanner= async (data)=>{
    try {
        const response= await api.post('/banner',data,{
            headers: {
                'Content-Type' :"multipart/form-data",
            }
        })
        if(response.status==201){
            return {
                success: true,
                message: response.data.message,
                data: response.data.data
            }
            GetBanner()
        }
    } catch (error) {
        console.log(error)
    }
}

export const getBannerById= async (id)=>{
    try {
        const response=await api.get(`/banner/${id}`);
        if(response.status==200){
            return {
                success: true,
                data: response.data.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
export const updateBanner= async (id,data)=>{
    try {
        const respose= await api.put(`/banner/${id}`,data,{
            headers:{
                'Content-Type' : "multipart/form-data"
            }
        })

        if(respose.status==200){
            return {
                success:true,
                data: respose.data.data,
                message: respose.data.message
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteBanner=async (id)=>{
    try {
        const response=await api.delete(`/banner/${id}`);
        if(response.status==200){
            return {
                success: true,
                message: response.data.message
            }
        }
    } catch (error) {
        console.log(error)
    }
}