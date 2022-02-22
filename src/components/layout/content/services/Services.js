import React from 'react'
import Service from './Service'

const Services = () => {
    return (
        <div className="section--container">
			<section className="section" id="services">
				<h2>Nasze usługi</h2>
				<div className="services">
					<Service fa="fa-solid fa-desktop" desc="Diagnostyka komputerowa (program Jaltest)"/>
					<Service fa="fa-solid fa-wrench" desc="Naprawy bieżące i okresowe"/>
					<Service fa="fa-solid fa-snowflake" desc="Mobilny serwis klimatyzacji samochodowej"/>
					<Service fa="fa-solid fa-car" desc="Usługi wulkanizacyjne oraz transportowe"/>
					<Service fa="fa-solid fa-bolt" desc="Naprawy elektromechaniczne i pneumatyczne"/>
				</div>	
			</section>
		</div>
    )
}

export default Services
