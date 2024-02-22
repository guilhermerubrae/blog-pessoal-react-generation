import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let navbarComponent

  return (
    <>
      <div className='w-full bg-blue-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:text-indigo-300 uppercase'>Postagens</Link>
            <Link to='/temas' className='hover:text-indigo-300 uppercase'>Temas</Link>
            <Link to='/cadastroTema' className='hover:text-indigo-300 uppercase'>Cadastrar tema</Link>
            <div className='hover:text-indigo-300 uppercase'>Perfil</div>
            <Link to='' onClick={logout} className='hover:text-indigo-300 uppercase'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar