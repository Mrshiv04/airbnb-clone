import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
	return (
		<div className='home'>
			<Banner />
			<div className='home_section'>
				<Card
					src='https://a0.muscache.com/im/pictures/miso/Hosting-4525034/original/f390d9e6-fea6-45b9-b116-897911d15877.png?im_w=960'
					title='The Muse Haus II - Ground Suite'
					description='good location on the Thames not far from Tubes plenty of local stores and restaurants quiet house with long and short stay guests clean rooms with great character and comfortable bed well organised shared kitchen,'
					price='₹1,970/ night'
				/>
				<Card
					src='https://a0.muscache.com/im/pictures/69fd78ad-48b0-429c-b874-f5feb1f2587e.jpg?im_w=960'
					title='Cosy Room in Stratford London (Min stay 15 nights)'
					description='Innovative accommodation located within the Queen Elizabeth Olympic Park next to Pudding Mill Lane DLR station, one stop from Stratford with easy access to The City and West End of London. Snoozebox has 78 rooms'
					price='₹1,370/ night'
				/>
				<Card
					src='https://a0.muscache.com/im/pictures/4dc1e847-3be0-4016-99cb-538e296eb37f.jpg?im_w=960'
					title='Modern clean shared flat in zone 1 next to tube'
					description='Studio flat in Marylebone just 10 minutes from the famous Abbey road and 10 minute walk to regents park. You will also be close to all the attractions on Baker street and about 5-10 minutes from Marylebone tube.'
					price='₹2,955/ night
					'
				/>
			</div>
			<div className='home_section'>
				<Card
					src='https://a0.muscache.com/im/pictures/miso/Hosting-46206929/original/ae89d9a7-f204-45d3-9087-7e3b24b4a436.jpeg?im_w=960'
					title='Studio U - simply the best location in Södermalm'
					description='Located on one of the most popular streets in Södermalm. The studio is located on a more quiet back street, however just a few meters walk to bars, restaurants and shopping.'
					price='₹3,191/ night'
				/>
				<Card
					src='https://a0.muscache.com/im/pictures/miso/Hosting-40790164/original/a52b9e68-556b-49ec-9c7f-f72e0c92511f.jpeg?im_w=960'
					title='Studio U - simply the best location in Södermalm'
					description='Located on one of the most popular streets in Södermalm. The studio is located on a more quiet back street, however just a few meters walk to bars, restaurants and shopping.'
					price='₹3,191/ night'
				/>
				<Card
					src='https://a0.muscache.com/im/pictures/122f83b7-1b88-420e-aa28-bdf1ee1fbfd3.jpg?im_w=1200'
					title='Street Studio Old Town'
					description='Small apartment on ground floor right in the middle of Old Town Stockholm. Apartment is perfect for worktrip or city weekend. Its newly renovated with great wifi and ventilation.'
					price='₹4,700/ night'
				/>
			</div>
		</div>
	);
}

export default Home;
