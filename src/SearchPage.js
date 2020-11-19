import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { Button } from '@material-ui/core';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage_info'>
				<p>62 stays - 26 august to 30 august - 2 guest</p>
				<h1>Stays Nearby</h1>
				<Button variant='outlined'>Cancellation Flexibility</Button>
				<Button variant='outlined'>Type of Place</Button>
				<Button variant='outlined'>Price</Button>
				<Button variant='outlined'>Rooms and beds</Button>
				<Button variant='outlined'>More Filters</Button>
				<SearchResult
					img='https://a0.muscache.com/im/pictures/ed7c7063-c765-4e33-9977-0f1e2d7e86ed.jpg?im_w=960'
					description='This is not an ordinary AirBnB; not spare space, but a labor of love, built with passion, energy and splashes of creativity, constructed to give you a new lease of life. This is an extremely spacious studio apartment chock full of state-of-the-art amenities and a bathroom with all modern fittings.'
					location='kolkata'
					title='Most luxurious experience at this price'
					star='4.96'
					price='₹1351/night'
					total='₹4200'
				/>
				<SearchResult
					img='https://a0.muscache.com/im/pictures/70f5278f-178e-4429-932b-48c7bd9e473b.jpg?im_w=960'
					description='Located 15 mins (600 meter) walking distance from Sector V. 5 mins from Metro station and bus stop.'
					location='SaltLake kolkata'
					title='Apartment in Saltlake near IT HUB, Metro station'
					star='5.0'
					price='₹2,037/night'
					total='₹6000'
				/>
				<SearchResult
					img='https://a0.muscache.com/im/pictures/0d3ea0c5-f793-4d6c-86d2-c9064c8d64d3.jpg?im_w=960'
					description='Excellent location, on a main road near Ballygunge, yet private and very quiet. Its a two room suite tucked on top of a roof. Breakfast can be enjoyed in the private garden. A work cum living area looks out into a garden and can be used to host guests or work with feet up. A bedroom that looks out into another private garden,is fitted with storage areas, tv and hot water kettle. '
					location='Kolkata,WB,India'
					title='Beautiful rooftop flat wit kitchen, bath, garden.'
					star='4.45'
					price='₹2,200/night'
					total='₹6,600'
				/>
				<SearchResult
					img='https://a0.muscache.com/im/pictures/78446742-ce5f-4ead-9939-911e7c7e2ed4.jpg?im_w=1200'
					description='It’s a middle class family home of ours which includes individual apartments and guest rooms. Our home has an old world charm and is very conveniently located, about 300 mtrs from the Metro station, it’s a slow paced 5 mins walk. Grocery , pharmacy, confectionery & coffee shops are next door. Cabs & Rickshaws are available right in the front of the house. We have regular house keeping & security.'
					location='Kolkata,West Bengal,India'
					title='Prana - two bedroom apartment with balcony'
					star='4.75'
					price='₹2,100/night'
					total='₹6,300'
				/>
			</div>
		</div>
	);
}

export default SearchPage;
