import java.util.ArrayDeque;
import java.util.Deque;

public class DequeDemo {
    private Deque<String> deque;

    public DequeDemo() {
        deque = new ArrayDeque<>();
    }

    public void addElementToFront(String element) {
        deque.addFirst(element);
    }

    public void addElementToEnd(String element) {
        deque.addLast(element);
    }

    public void removeElementFromFront() {
        deque.pollFirst();
    }

    public void removeElementFromEnd() {
        deque.pollLast();
    }

    public boolean searchElement(String element) {
        return deque.contains(element);
    }

    public Deque<String> getDeque() {
        return deque;
    }
}
