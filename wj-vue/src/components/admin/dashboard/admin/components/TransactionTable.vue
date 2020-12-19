<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Donate_No" min-width="200">
      <template v-slot="scope">
        {{ orderNoFilter(scope.row.order_no) }}
      </template>
    </el-table-column>
    <el-table-column label="amount" width="195" align="center">
      <template v-slot="scope">
        <!-- TODO: smt wrong here-->
        <!--  ¥{{ scope.row.price | toThousandFilter }} -->
        ¥{{ scope.row.price }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template v-slot="{ row }">
        <el-tag :type="statusFilter(row.status)">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { transactionList } from '@/api/remote-search'

export default {
  props: {
    statusMap: {
      success: "success",
      pending: "danger",
    },
  },

  computed: {
    statusFilter(status) {
      return this.statusMap[status];
    },
    orderNoFilter(str) {
      return str.substring(0, 30);
    },
  },
  data() {
    return {
      list: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // transactionList().then(response => {
      //   this.list = response.data.items.slice(0, 8)
      // })
    },
  },
};
</script>
