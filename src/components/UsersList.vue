<template>
  <Fetcher :apiMethod="fetchUsers">
    <template #default="{ data }">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in data" :key="user.id">
            <td class="text-left">{{ user.id }}</td>
            <td class="text-left">{{ user.name }}</td>
            <td class="text-left">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </Fetcher>
</template>

<script>
import Fetcher from "@/components/Fetcher";
import { fetchUsers } from "@/services/users";

export default {
  name: "UsersList",
  components: {
    Fetcher,
  },
  methods: {
    fetchUsers,
  },
};
</script>
