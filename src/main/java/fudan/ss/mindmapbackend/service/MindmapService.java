package fudan.ss.mindmapbackend.service;

import fudan.ss.mindmapbackend.controller.json_model.NodeCount;
import fudan.ss.mindmapbackend.controller.json_model.NodeValue;
import fudan.ss.mindmapbackend.model.*;
import fudan.ss.mindmapbackend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MindmapService {
    @Autowired
    private MindmapRepository mindmapRepository;
    @Autowired
    private NodeRepository nodeRepository;

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

    /**
     * 得到一张图下所有节点的资源情况（包括课件，资源，作业）
     * @param mindmap_id
     * @return
     */
    public List<NodeCount> getNodeCount(String mindmap_id) {
        List<NodeCount> nodeCountList = new ArrayList<>();
        //获得mindmap
        Mindmap tempMindmap = mindmapRepository.findByMindmap_id(mindmap_id);

        Node root_node = mindmapRepository.findRootNode(tempMindmap.getId());
        if (root_node == null)
            return nodeCountList;

        //深度遍历
        Queue<Node> nodes = new LinkedList<>();
        Queue<Node> nodesChildren = new LinkedList<>();
        nodes.add(root_node);

        while (!nodes.isEmpty() || !nodesChildren.isEmpty()) {

            if (nodes.isEmpty()) {
                nodes = nodesChildren;
                nodesChildren = new LinkedList<>();
            }
            Node thisNode = nodes.peek();


            // 每个node创建一个nodeCount
            NodeCount nodeCount = new NodeCount();
            nodeCount.setNodeId(thisNode.getId());
            nodeCount.setNodeTopic(thisNode.getTopic());

            // 选择题统计
            AssignmentMultiple[] multiples = nodeRepository.findAssignmentMultiple(thisNode.getLong_id());
            // 判断题统计
            AssignmentJudgment[] judgments = nodeRepository.findAssignmentJudgments(thisNode.getLong_id());
            // 简答题统计
            AssignmentShort[] shorts = nodeRepository.findAssignmentShort(thisNode.getLong_id());
            nodeCount.setHomeworkNum(multiples.length + judgments.length + shorts.length);

            // resourceNum
            nodeCount.setResourceNum(thisNode.getLinks().size() + thisNode.getMaterials().size());

            // coursewareNum
            nodeCount.setCoursewareNum(thisNode.getCoursewares().size());

            //加入到nodesCountList中
            nodeCountList.add(nodeCount);

            Collections.addAll(nodesChildren, nodeRepository.findChildren(thisNode.getLong_id()));
            nodes.remove();
        }

        return nodeCountList;
    }
}
