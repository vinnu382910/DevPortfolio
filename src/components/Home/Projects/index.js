import React, { Component} from 'react';
import { v4 as uuidv4 } from 'uuid'
import ProjectItem from '../ProjectItem';
import './style.css'

const projectsList = [
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1731841628/React_App_-_Google_Chrome_11_17_2024_4_34_42_PM_bwwv9g.png',
        projectName: 'Todo App',
        githubLink: 'https://github.com/vinnu382910/todo-frontend',
        projectUrl: 'https://todo-frontend-sigma-dusky.vercel.app/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726011863/nxt-watch-home-failure-light-theme-lg-output_rypiy5.png',
        projectName: 'Nxt Watch',
        githubLink: 'https://github.com/vinnu382910/Nxt-Watch',
        projectUrl: 'https://nxtwatch572.ccbp.tech/saved-videos',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726012203/jobby-app-home-lg-output_kcyvbx.png',
        projectName: 'Jobby App',
        githubLink: 'https://github.com/vinnu382910/jobby-APP',
        projectUrl: 'https://jobbyapp572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726012592/nxt-trendz-authentication-lg-home-output_msix9o.png',
        projectName: 'Nxt Trendx E-commerce App',
        githubLink: 'https://github.com/vinnu382910/Nxt-Trendz---Cart-Features',
        projectUrl: 'https://nxttrendz572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1702444339/vinaytemp.ccbp.tech_-_Google_Chrome_12_13_2023_10_34_16_AM_iujd6n.png',
        projectName: 'Weather Application',
        githubLink: 'https://github.com/vinnu382910/Weather_APP',
        projectUrl:'https://weatherapp0.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1702442898/vinaytemp.ccbp.tech_-_Google_Chrome_12_13_2023_10_14_39_AM_drd5qy.png',
        projectName: 'Tempeature Convertor App',
        githubLink: 'https://github.com/vinnu382910/TempConverter',
        projectUrl:'https://vinaytemp.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1702438305/Calculator_-_Google_Chrome_12_13_2023_8_58_48_AM_zzbynm.png',
        projectName: 'Calculator App',
        githubLink: 'https://github.com/vinnu382910/Calculator',
        projectUrl: 'https://vinayscalculato.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726052025/gradient-generator-output-v0_oifvmg.gif',
        projectName: 'Gradient Generator',
        githubLink: 'https://github.com/vinnu382910/Gradient-Generator',
        projectUrl: 'https://addgradient572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726013953/React_App_-_Google_Chrome_9_11_2024_5_48_23_AM_lli7nj.png',
        projectName: 'Add-Events-Calendar',
        githubLink: 'https://github.com/vinnu382910/Add-Events-Calendar',
        projectUrl: 'https://vinnu382910.github.io/Add-Events-Calendar/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726049606/rock-paper-scissors-output_nqzzuo.gif',
        projectName: 'Rock-paper-scissor Game',
        githubLink: 'https://github.com/vinnu382910/Rock-Paper-Scissors',
        projectUrl: 'https://rps572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726013834/React_App_-_Google_Chrome_9_11_2024_5_45_44_AM_blggo2.png',
        projectName: 'Todo App',
        githubLink: 'https://github.com/vinnu382910/Todo-App',
        projectUrl: 'https://vinnu382910.github.io/Todo-App/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726055203/money-manager-output_twhfdj.gif',
        projectName: 'Money Manager',
        githubLink: 'https://github.com/vinnu382910/Money-Manager',
        projectUrl: 'https://moneyManager572.ccbp.tech',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726028311/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732d686f6f6b732f6e6f7465732d6170702d6f75747075742e676966_jle1a7.gif',
        projectName: 'Add Note',
        githubLink: 'https://github.com/vinnu382910/AddNote',
        projectUrl: 'https://addnote572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726054898/ipl-dashboard-output-v2_pfzd2f.gif',
        projectName: 'IPL Dashboard',
        githubLink: 'https://github.com/vinnu382910/IPL-Dashboard',
        projectUrl: 'https://ipldashboard572.ccbp.tech/',
        id: uuidv4()

    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726013848/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f706173736f7772642d6d616e616765722d6f75747075742d76302e676966_nhcnmk.gif',
        projectName: 'Password Manager',
        githubLink: 'https://github.com/vinnu382910/Password-Manager',
        projectUrl: 'https://passwdmange572.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1702455580/foodmuch382910.ccbp.tech_-_Google_Chrome_12_13_2023_1_44_36_PM_xte2vd.png',
        projectName: 'Food Much E-commerce',
        githubLink: 'https://github.com/vinnu382910/foodmuch',
        projectUrl: 'https://foodmuch382910.ccbp.tech/',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726069247/cowin-dashbaord-output_oo0g7s.gif',
        projectName: 'CowinDashboard',
        githubLink: 'https://github.com/vinnu382910/cowinDashboard',
        projectUrl: 'https://cowinDB572.ccbp.tech',
        id: uuidv4()
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgc9ugux7/image/upload/v1726074120/appointments-app-output_csvjfh.gif',
        projectName: 'Add Appointments',
        githubLink: 'https://github.com/vinnu382910/Add-Appointments-',
        projectUrl: 'https://appointments572.ccbp.tech/',
        id: uuidv4()
    }

]


class Projects extends Component {
        state={showMore: false}

        onClickShowMore = () => {
            this.setState(prevState => ({showMore: !prevState.showMore}))
        }

        render() {
        const {showMore} = this.state
        return (
            <div className="project-main-cont" id="projects">
                <h1 className="main-heading2">Projects</h1>
                <div className={showMore ? "showAllItems" : "projet-list-cont"}>
                    {
                    projectsList.map(eachItem => (<ProjectItem key={eachItem.id} projectDetails={eachItem} />))
                    }
                </div>
                <button className='showmore-btn' onClick={this.onClickShowMore}>{showMore? "Show Less" : "Show More"}</button>
            </div>
        )
    }
}

export default Projects