pragma solidity ^0.4.25;

contract Factory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedCampaigns;
    }
}


contract Campaign {
    
    struct Request{
        string description;
        uint value;
        address recepient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContributer;
    mapping(address=>bool) public approvers;
    uint approversCount;
    
    modifier restricted{
        require(manager == msg.sender);
        _;
    }
    
    constructor(uint minimum, address creator) public {
        manager = creator;
        
        minimumContributer = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContributer);
        
        approvers[msg.sender] = true;
        
        approversCount++;
    }
    
    function createRequest(string memory description, uint value, address recepient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recepient: recepient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > (approversCount/2));
        
        request.recepient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
    ){
        return (
            minimumContributer,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getReaquestCount() public view returns(uint){
        return requests.length;
    }
}
