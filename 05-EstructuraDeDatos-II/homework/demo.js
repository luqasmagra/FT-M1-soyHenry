function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = newNode;
    this.size++;
    return newNode;
  }
  while (current.next) {
    current = current.next;
  } // Mientras tenga a donde moverme, me muevo
  current.next = newNode;
  this.size++;
};

const miLista = new LinkedList();
miLista.add(10);
miLista.add(15);
miLista.add(7);
miLista.add(100);

console.log(miLista);

console.log(!!{ asd: "asd" });
