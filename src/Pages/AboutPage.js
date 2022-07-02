import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Tittle title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Html'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Css'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Javascript'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Typescript'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Angular'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Asp.Net'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'Core Java'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Wpf'} progress={'25%'} width={'25%'} />
        <SkillsSection skill={'Sql Server'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Winform'} progress={'20%'} width={'30%'} />
      </div>
    </div>
  )
}

export default AboutPage
