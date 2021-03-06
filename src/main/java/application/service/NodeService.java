package application.service;

import application.model.*;
import application.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NodeService {
    @Autowired
    private NodeRepository nodeRepository;

    public Node findByNodeId(String course_mindmap, String nodeId) {
        return nodeRepository.findByNodeId(course_mindmap, nodeId);
    }

    public Courseware[] findCoursewares(long id) {
        return nodeRepository.findCoursewares(id);
    }

    public Material[] findMaterials(long id) {
        return nodeRepository.findMaterials(id);
    }

    public Link[] findLinks(long id) {
        return nodeRepository.findLinks(id);
    }

    public AssignmentMultiple[] findAssignmentMultiple(long id) {
        return nodeRepository.findAssignmentMultiple(id);
    }

    public AssignmentJudgment[] findAssignmentJudgements(long id) {
        return nodeRepository.findAssignmentJudgments(id);
    }

    public AssignmentShort[] findAssignmentShort(long id) {
        return nodeRepository.findAssignmentShort(id);
    }

    public void delete(Node node) {
        nodeRepository.delete(node);
    }

    public void save(Node node) {
        nodeRepository.save(node);
    }

    public Node[] findChildren(long id ){
        return nodeRepository.findChildren(id);
    }

    public Note[] getNotes(long id){
        return nodeRepository.findNotes(id);
    }
}
