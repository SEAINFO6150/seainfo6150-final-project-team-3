import React from 'react'
import Banner from './Banner.jsx'
import CareList from './CareList.jsx'

const Care = () => {
    return (
        <div>
            <div>
                <Banner />
                <p> Are you a new pet parent, or looking to bolster your pet care skills?
                Read on for grooming guides, nutrition information, safety tips and more. </p>
                <CareList />
            </div>
        </div>
    )
}

export default Care
