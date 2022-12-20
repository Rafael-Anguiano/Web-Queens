import React from 'react'
import {BsPersonFill, BsLinkedin, BsGithub, BsTerminalFill, BsFillEnvelopeFill, BsFileEarmarkPersonFill} from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='footer position-fixed w-100 bottom-0 start-0 mw-100 p-2 bg-light'>
            <div className=" ">
                <span className='text-dark text-center fw-bold items-center d-block'>
                    <p className='m-0'>Rafael de Jesús Anguiano Suárez del Real</p>
                    <a href='https://rafael-anguiano-portfolio.web.app/' title="Portfolio" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsPersonFill className='m-2'/></a>
                    <a href='../Resume-Rafael-Anguiano.pdf' title="Resume" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsFileEarmarkPersonFill className='m-2'/></a>
                    <a href='https://www.linkedin.com/in/rafael-anguiano/' title="LinkedIn Profile" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsLinkedin className='m-2'/></a>
                    <a href='https://github.com/Rafael-Anguiano' title="GitHub Profile" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsGithub className='m-2'/></a>
                    <a href='mailto:rj.anguiano.23@gmail.com' title="Email Rafael" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsFillEnvelopeFill className='m-2'/></a>
                    <a href='https://www.npmjs.com/package/@rafael-anguiano/queens' title="NPM Package" target='_blank' rel='noreferrer' className='text-dark text-decoration-none'><BsTerminalFill className='m-2'/></a>
                </span>
            </div>
        </div>
    )
}

export default Footer