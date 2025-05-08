import * as S from './styles'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <S.MainContent>
                <Outlet/>
            </S.MainContent>
        </>
    )
}

export default Layout;