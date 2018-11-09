package fudan.ss.mindmapbackend.service;

import fudan.ss.mindmapbackend.model.Mindmap;
import fudan.ss.mindmapbackend.model.Node;
import fudan.ss.mindmapbackend.repository.MindmapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MindmapService {
    @Autowired
    private MindmapRepository mindmapRepository;

    public Mindmap findByMindmapId(String id) {
        return mindmapRepository.findByMindmap_id(id);
    }

    public Node findRootNode(long id) {
        return mindmapRepository.findRootNode(id);
    }

    public void delete(Mindmap mindmap) {
        mindmapRepository.delete(mindmap);
    }

    public void save(Mindmap mindmap) {
        mindmapRepository.save(mindmap);
    }
}
