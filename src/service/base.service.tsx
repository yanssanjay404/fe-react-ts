import Response from "../models/response";
import axios from "axios";


export default class BaseService {
    private static baseURL: string = "https://gorest.co.in/public/v2/";


    public static async getAll<T>(url: string): Promise<Response> {
        let res = await axios.get<Array<T>>(this.baseURL + url)
            .then((response: any) => {
                const result = response.data;
                console.log("result", result)
                // if (result && result.success) {
                //     console.log("oke")
                //     return new Response(true, result.data as Array<T>, "Success", "");
                // } else {
                //     console.log("gagal")
                //     const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                //     return new Response(false, null, "Error", msg);
                // }

                try {
                    console.log("oke")
                    return new Response(true, result as Array<T>, "Success", "");
                } catch (error) {
                    // const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    throw new Error("error")
                }

            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(this.baseURL + url + param)
            .then((response: any) => {
                const result = response.data;
                if (result && result.success) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static delete(url: string, param: any): Promise<Response> {
        
        console.log("param", param)
        console.log("alamat", url)
        console.log("link ",this.baseURL + url)

        const token = "666244e529044865601b075f13615d5fcfbb57204aefa31ab016141272cdbe9d"
        let res = axios.delete(this.baseURL + url + param, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                const result = response.data;
                if (result && result.success) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        console.log("res1", res)
        return res;
    }

    public static create<T>(url: string, obj: T): Promise<Response> {
        const token = "666244e529044865601b075f13615d5fcfbb57204aefa31ab016141272cdbe9d"
        let res = axios.post(this.baseURL + url, obj, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                const result = response.data;
                console.log("result create ", result)
                // if (result && result.success) {
                //     return new Response(true, result.data, "Success", "");
                // } else {
                //     const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                //     return new Response(false, null, "Error", msg);
                // }

                try {
                    return new Response(true, result.data, "Success", "");
                } catch (error) {
                    console.log("failed input data")
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }

            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static update<T>(url: string, param: any, obj: T): Promise<Response> {
        const token = "666244e529044865601b075f13615d5fcfbb57204aefa31ab016141272cdbe9d"
        let res = axios.put(this.baseURL + url + param, obj, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                const result = response.data;
                // if (result && result.success) {
                //     console.log("alhamdulillah")
                //     return new Response(true, result.data, "Success", "");
                // } else {
                //     console.log("yah gagal")
                //     const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                //     return new Response(false, null, "Error", msg);
                // }

                try {
                    console.log("success update data")
                    return new Response(true, result.data, "Success", "");
                } catch (error) {
                    console.log("failed update data")
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }

            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);;
            });
        return res;
    }
}