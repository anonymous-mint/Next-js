import React from 'react'
import { useRouter } from 'next/router';

const ReviewId = () => {
	const {query} = useRouter();
	const ID = query.reviewId; //here the filename which is defined dynamically
	return (
		<div>Review for product {ID}</div>
	)
}

export default ReviewId