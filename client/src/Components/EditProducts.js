import { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getoneproduct, updataProduct } from '../Redux/Actions/ProductAction'
import Rating from '@mui/material/Rating'
const EditProducts=()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(getoneproduct(id))
    },[])
     
     const oneProduct = useSelector(state=>state.ProductReducer.oneProduct)
     const {id} = useParams()
     const [name,setName]=useState(oneProduct.name)
     const [description,setDescription] = useState(oneProduct.description)
     const [price,setPrice] = useState(oneProduct.price)
     const [refrence,setRefrence] = useState(oneProduct.refrence)
     const [rate,setRate] = useState(oneProduct.rate)
     const [imageP,setImageP] = useState(oneProduct.imageP)

     useEffect(()=>{
          setName(oneProduct.name)
          setDescription(oneProduct.description)
          setPrice(oneProduct.price)
          setRefrence(oneProduct.refrence)
          setRate(oneProduct.rate)
          setImageP(oneProduct.imageP)
     },[oneProduct])
     const navigate = useNavigate()
     const handleEdit=(a)=>{
           a.preventDefault()    
          dispatch(updataProduct({name,description,price,refrence,rate,public_id:oneProduct.imageP.public_id},id,navigate))
     }
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Enter Number" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Refrence</Form.Label>
        <Form.Control value={refrence} onChange={(e)=>setRefrence(e.target.value)} type="Number" placeholder="Enter Number" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <br/>
        <Rating value={rate} onChange={(e)=>setRate(e.target.value)} />      
       </Form.Group>
      
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control accept='image/*' onChange={(e)=>setImageP(e.target.files[0])} type="file" placeholder="Enter image link" />
       </Form.Group>

      <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}
export default EditProducts