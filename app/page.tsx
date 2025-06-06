import Hero from '@/app/components/sections/Hero'
import HowItWorks from '@/app/components/sections/HowItWorks'
import Cti from '@/app/components/sections/Cti'
import MeetOurTeam from '@/app/components/sections/MeetOurTeam'
import OfficeVisit from '@/app/components/sections/OfficeVisit'
import EmployeesTable from '@/app/components/sections/employeesTable'
import Employees from '@/app/components/sections/employees'         
import TeamList from '@/app/components/TeamList'


export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Cti />
      <MeetOurTeam />
      <OfficeVisit />
      <EmployeesTable />
      <Employees />       
      <TeamList />
      
    
    </>
  )
}
