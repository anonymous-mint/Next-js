import { useRouter } from 'next/router'
import React from 'react'

const ProductId = () => {
	const {query} = useRouter();
	const ID = query.productId
	return (
		<div>Product detains of page {ID}</div>
	)
}

export default ProductId