import {useState} from 'react';
import APIURL from '../helpers/environment';

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/natescloudinary/image/upload'

const ImgageUpload = (props) => {

    const [imageUrl, setImageUrl] = useState('#')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${APIURL}/product/cloudsign`, {
            method: 'GET',
            headers: {
                'Authorization': props.token
            }
        })

        const { sig, ts } = await response.json()

        const file = document.getElementById('file-input').files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'artisan-goods-cloudinary')
        formData.append('api_key', '322896181919414')
        formData.append('signature', sig)
        formData.append('timestamp', ts)

        const results = await (await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData
        })).json()

        console.log(results)

        const final = await (await fetch(`${APIURL}/product/photoURL`, {
            method: 'PUT',
            headers: {
                'Authorization': props.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url })
        })).json()

    }

    return (
        <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <input id="file-input" type="file" />
                <button>Upload Product Image!</button>
            </form>
            <img src={imageUrl} alt="product image" />
        </>
    )
}

export default ImgageUpload;