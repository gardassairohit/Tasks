import java.util.Stack;

public class StackDemo {
    private Stack<String> stack;

    public StackDemo() {
        stack = new Stack<>();
    }

    public void pushElement(String element) {
        stack.push(element);
    }

    public void popElement() {
        stack.pop();
    }

    public boolean searchElement(String element) {
        return stack.contains(element);
    }

    public Stack<String> getStack() {
        return stack;
    }
}
