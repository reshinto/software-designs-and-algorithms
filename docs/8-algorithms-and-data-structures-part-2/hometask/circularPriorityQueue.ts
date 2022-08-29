class PriorityNode<T> {
  // lower value indicate higher priority
  constructor(public data: T, public priority: number = 0, public next: PriorityNode<T> | null = null) {}
}

class CircularPriorityQueue<T> {
	public head: PriorityNode<T> | null = null;
  public tail: PriorityNode<T> | null = null;
  public size: number = 0;

  public enqueue(data: T, priority: number): void {
    const newNode = new PriorityNode<T>(data, priority);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    } else if (this.size === 1) {
      const temp = this.head;
      if (this.head.priority > newNode.priority) {
        newNode.next = temp;
        temp.next = newNode;
        this.head = newNode;
        this.tail = temp;
      } else {
        this.head.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
      }
    } else {
      let currentNode = this.head as PriorityNode<T>;
      let previousNode = this.tail as PriorityNode<T>;

      for (let i=0; i<this.size; i++) {
        if (newNode.priority < currentNode.priority) {
          if (i === 0) {
            this.head = newNode;
            if (this.tail) {
              this.tail.next = this.head;
            }
          }
          break;
        }
        if (i === this.size - 1) {
          this.tail = newNode;
        }
        previousNode = currentNode;
        currentNode = currentNode.next as PriorityNode<T>;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    this.size++;
  }

  public dequeue(): PriorityNode<T> | null {
    const temp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head?.next;
      if (this.tail) {
        this.tail.next = newHead as PriorityNode<T>;
      }
      this.head = newHead as PriorityNode<T>;
    }
    this.size--;

    return temp;
  }
}

const ccpq = new CircularPriorityQueue<number>();
let totalJobs = 10000;
for (let i=0; i<totalJobs; i++) {
  const randomPriority = Math.floor(Math.random() * 20 + 1);
  ccpq.enqueue(i, randomPriority);
}

function print() {
  let current = ccpq.head;
  for (let i=0; i<totalJobs; i++) {
    console.log(current);
    current = current?.next as PriorityNode<number>;
  }
}

print();


function runJob() {
  let count = 1;
  while (ccpq.dequeue()) {
    // mimic current job running
    console.log("running top priority job");

    // mimic adding of job when another job is already running
    if (count === 1) {
      ccpq.enqueue(123, 4);
    }
    count--;
  }
  console.log("All job completed")
}

console.log("#########");
runJob();
print();