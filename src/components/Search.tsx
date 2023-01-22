import React, { useState } from 'react'

const Search = () => {
  const [value, setValue] = useState(
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('q') ?? ''
      : ''
  )

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    window.location.href = `/search?q=${value}`
    localStorage.setItem('searchResult', value)
  }

  return (
    <form
      role="search"
      className={`container ${value}`}
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        onChange={handleChange}
        value={value}
        className={`input ${value}`}
        placeholder="どんな記事をお探しですか？"
      />
      <button className="button">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5.5" fill="#242422" stroke="white"></circle>
          <line
            x1="9.35355"
            y1="9.64645"
            x2="13.3536"
            y2="13.6464"
            stroke="white"
          ></line>
        </svg>
      </button>
    </form>
  )
}

export default Search
