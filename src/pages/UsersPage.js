import React from 'react'
import DashboardLayout from '../layouts/Dashboard'

const UsersPage = (props) => {
  return (
    <DashboardLayout>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>genre</th>
            <th>release date</th>
          </tr>
        </thead>
        <tbody>
          <tr class="active">
            <td>The Shawshank Redemption</td>
            <td>Crime, Drama</td>
            <td>14 October 1994</td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  )
}

export default UsersPage
