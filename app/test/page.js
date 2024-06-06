"use client";
import { useEffect, useState } from 'react'
import { client } from '../../sanity.js'


const TestConnection = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(`*[_type == "category"]`)
        setCategories(data)
        console.log(data)
        console.log('data')

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) return <p>Loading...</p>
  if (categories.length === 0) return <p>No categories found</p>

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TestConnection