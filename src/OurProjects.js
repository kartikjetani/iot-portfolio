import React from "react";
import { Card } from "antd";
import { getFirestore, collection, getDocs ,addDoc,setDoc,doc} from 'firebase/firestore/lite';
import {app} from "./App"

function OurProjects() {
  const { Meta } = Card;
  const [projects,setProjects] = React.useState()

  const db = getFirestore(app);

  async function getProjects(db) {
    const projectsCol = collection(db, 'projects');
    const projectSnapshot = await getDocs(projectsCol);
    const projectList = projectSnapshot.docs.map(doc => doc.data());
    return projectList;
  }

  React.useEffect(async()=>{

    setProjects(await getProjects(db));

  },[])

  return (!projects)?<p>Loading...</p> :(
    <div className="my-10 grid grid-cols-2 gap-2  justify-items-center ">
      {
        projects.map((item)=>{
          return (
            <Card
            className="bg-gray-100 rounded-xl my-6"
                hoverable
                style={{ width: 450 }}
                cover={
                  <img
                    alt="example"
                    src="https://microsoft.github.io/azure-iot-developer-kit/assets/images/projects-devkit-get-started-th.jpg"
                  />
                }
              >
                <Meta  title={item.project_name} description={item.project_desc}  />
              </Card>
          )
        })
      }
   
    </div>
  );
}

export default OurProjects;
