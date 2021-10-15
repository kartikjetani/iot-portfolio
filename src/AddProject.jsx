import React from "react";
import { Form, Input, InputNumber, Button,message } from 'antd';
import { getFirestore, collection, getDocs ,addDoc,setDoc,doc,Timestamp} from 'firebase/firestore/lite';
import {app} from "./App"

function AddProjects() {

  const db = getFirestore(app);

    const onFinish = async(values) => {
        const docRef = await addDoc(collection(db, "projects"), {
            project_name: values.project_name,
            project_desc: values.project_desc,
            date_created: Timestamp.now()
          }).then((res)=>{message.success("Project Added.",3) ; return res;}).catch(()=>{message.error("Error!! please try again later",3)})
          console.log("Document written with ID: ", docRef.id);
    };

    return (
        <Form  name="nest-messages" onFinish={onFinish} >
            <Form.Item name={['project_name']} label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={[ 'project_desc']} label="Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['enrollment']} label="Enrollment" rules={[{ required: true }]}>
                <InputNumber type="number" />
            </Form.Item>
           
            <Form.Item wrapperCol={{  offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddProjects;
