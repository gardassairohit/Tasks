import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    private Map<String, Integer> map;

    public MapDemo() {
        map = new HashMap<>();
    }

    public void addElement(String key, Integer value) {
        map.put(key, value);
    }

    public void removeElement(String key) {
        map.remove(key);
    }

    public boolean searchElement(String key) {
        return map.containsKey(key);
    }

    public Map<String, Integer> getMap() {
        return map;
    }
}
