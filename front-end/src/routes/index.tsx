import { useRoutes } from 'react-router-dom';
import Layout from '../layout';
import ModulePicker from '../views/ChooseModule';
import Receipts from '../views/Receipts';

const Routes: React.FC = () => {

    const routes = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children:[
                {
                    path: '',
                    element: <ModulePicker/>
                },
                {
                    path: 'pagamentos',
                    element: <h1>pagar</h1>
                },
                {
                    path: 'recebimentos',
                    element: <Receipts/>
                },
                {
                    path: 'relatorio',
                    element: <h1>relatorio</h1>
                }
            ]
        }
    ]);

    return routes;
};

export default Routes;