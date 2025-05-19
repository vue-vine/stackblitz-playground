import { useCounterStore } from '../stores/counter'

interface CounterProps {
  step: number
}

function Counter(props: CounterProps) {
  const counter = useCounterStore()

  vineStyle.scoped(`
    .action-btn {
      padding: .413rem 1rem;
      border: 1px solid #88888850;
      background-color: transparent;
      user-select: none;
      cursor: pointer;
    }
  `)

  return vine`
    <div class="counter h-full flex flex-col justify-center items-center mb-4">
      <p class="title text-lg mb-4">Count: {{ counter.count }}</p>

      <div class="actions flex gap-2">
        <button
          class="action-btn rounded-md transition-colors hover:bg-[#88888828] active:bg-[#88888850]"
          @click="counter.increment(step)"
        >
          Increment(+{{ step }})
        </button>
        <button
          class="action-btn rounded-md transition-colors hover:bg-[#88888828] active:bg-[#88888850]"
          @click="counter.decrement(step)"
        >
          Decrement(-{{ step }})
        </button>
      </div>
    </div>
  `
}

export function Home() {
  return vine`
    <Counter :step="2" />
  `
}
