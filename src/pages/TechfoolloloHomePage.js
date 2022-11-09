import React from 'react'
import CardText from "../CardText";
const BgComponent = React.lazy(()=> import('../lottiefileData/BgComponent/BgComponent'))
export default function TechfoolloloHomePage() {


  return (
    <>
    <BgComponent />
    <div className="techfoollolo-content">
    <CardText header={"Hello. This is Techfoollolo."} content={"I enjoy studying DevOps. I love to build things, but I love to manage and enhance things even more. I also love to share."}/>
    <CardText header={"Work with me"} content={"If you wanna work with me, I'm always open mind for interesting projects. :)"}/>

    </div>
    </>
  )
}