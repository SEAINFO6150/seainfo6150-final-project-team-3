import React from 'react'
import Banner from './Banner.jsx'
import CareList from './CareList/index.jsx'
import { useRouteMatch } from 'react-router-dom'
import CareDetail from './CareDetail/index.jsx'

const Care = () => {
    // react-router：https://reacttraining.com/react-router/web/api/BrowserRouter/children-node
    let match = useRouteMatch('/care/:careId');
    return (
        <div>
            {!match ? (
                <div>
                    <Banner />
                    <p> Are you a new pet parent, or looking to bolster your pet care skills?
                    Read on for grooming guides, nutrition information, safety tips and more. </p>
                    <CareList />
                </div>
            ) : <CareDetail />}
        </div>
    )
}

export default Care
