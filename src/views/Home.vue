<template>
  <div>
    <h1>Users</h1>
    <UsersList />
  </div>
</template>

<script>
import UsersList from "@/components/UsersList";

export default {
  name: "HomeView",
  components: {
    UsersList,
  },
};
</script>
