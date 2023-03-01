import React from 'react'

const BarraBusque = ({
    value,
    isCarga,
    handleSubmit,
    onChange
}) => {
  return (

        <form onSubmit={handleSubmit}>
            <input
            value={value}
            disabled={isCarga}
            onChange={onChange}
            placeholder="Search Recetas"
            className="form-control"
            />
            <input
            disabled={isCarga || !value}
            type="submit"
            className="btn"
            value="Search"
            />
        </form>
  )
}
export default BarraBusque;