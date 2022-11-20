import React from 'react'
import styled from 'styled-components'
import SearchSidebar from './SearchSidebar'
import UpdateSidebar from './UpdateSidebar'
import ConfigSidebar from './ConfigSidebar'
import AddPageSidebar from './AddPageSidebar'
import TemplateSidebar from './TemplateSidebar'
import ImportSidebar from './ImportSidebar'
import RecycleSidebar from './RecycleSidebar'

const Wrapper = styled.div`
    & div{
        display : flex;
        align-items : center;
    }
`

const SidebarContainer = () => {
  return (
    <Wrapper>
        <SearchSidebar/>
        <UpdateSidebar/>
        <ConfigSidebar/>
        <AddPageSidebar/>
        <TemplateSidebar/>
        <ImportSidebar/>
        <RecycleSidebar/>
    </Wrapper>
  )
}

export default SidebarContainer