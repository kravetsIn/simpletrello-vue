<template>
  <div class="task cursor-pointer"
       draggable="true"
       @dragstart="pickupTask($event, taskIndex, columnIndex)"
       @dragover.prevent
       @dragenter.prevent
       @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
       @click="goToTask(task.id)"
  >
    <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
    <p class="w-full flex-no-shrink mt-1 text-sm" v-if="task.description">{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'BoardColumnTask',
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    pickupTask (e, taskIndex, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-task-index', taskIndex)
      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'task')
    },
    moveTaskOrColumn (e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData('type')
      if (type === 'task') this.moveTask(e, toTasks, toTaskIndex !== 'undefined' ? toTaskIndex : toTasks.length)
    },
    goToTask (id) {
      this.$router.push({ name: 'task', params: { id } })
    },
    moveTask (e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      const fromTaskIndex = e.dataTransfer.getData('from-task-index')

      this.$store.commit('MOVE_TASK', {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      })
    }
  }
}
</script>

<style scoped lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
