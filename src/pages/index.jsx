import Layout from './Layout.jsx'
import Calculator from './Calculator'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

export default function Pages() {
  // If your Layout shows a page name, keep it simple:
  const location = useLocation()
  const currentPageName = 'Calculator'

  return (
    <Layout currentPageName={currentPageName}>
      <Routes>
        {/* "/" under the basename -> renders Calculator */}
        <Route index element={<Calculator />} />

        {/* explicit page route (note: NO leading slash) */}
        <Route path="calculator" element={<Calculator />} />

        {/* anything else -> go to index */}
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </Layout>
  )
}
