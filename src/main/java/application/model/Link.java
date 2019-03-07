package application.model;

import org.neo4j.ogm.annotation.*;

@NodeEntity(label = "Link")
public class Link {
    @Id
    @GeneratedValue
    private Long id;
    private String link_address;
    private String link_name;
    private String node;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLink_address() {
        return link_address;
    }

    public void setLink_address(String link_address) {
        this.link_address = link_address;
    }

    public String getLink_name() {
        return link_name;
    }

    public void setLink_name(String link_name) {
        this.link_name = link_name;
    }

    public String getNode() {
        return node;
    }

    public void setNode(String node) {
        this.node = node;
    }
}
