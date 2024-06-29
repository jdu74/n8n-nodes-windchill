import * as ClfNodeChildNodesGetClfNode from './ClfNode.ChildNodes.GetClfNode';
import * as ClfNodeChildNodesGetClfNodes from './ClfNode.ChildNodes.GetClfNodes';
import * as ClfNodeClassifiedObjectsGetClassifiedObject from './ClfNode.ClassifiedObjects.GetClassifiedObject';
import * as ClfNodeClassifiedObjectsGetClassifiedObjects from './ClfNode.ClassifiedObjects.GetClassifiedObjects';
import * as ClfNodeParentNodeGetClfNode from './ClfNode.ParentNode.GetClfNode';
import * as FunctionGetClassificationNodeInfoWithClfNodeInternalName from './Function_GetClassificationNodeInfo_With_clfNodeInternalName';
import * as FunctionGetClfBindingInfoWithClfStructureNameSpace from './Function_GetClfBindingInfo_With_clfStructureNameSpace';
import * as FunctionGetEnumTypeConstraintOnClfAttributesWithClfStructureNameSpaceAttributeInternalName from './Function_GetEnumTypeConstraintOnClfAttributes_With_clfStructureNameSpace_attributeInternalName';
import * as GetClfNode from './GetClfNode';
import * as GetClfNodes from './GetClfNodes';

import { INodeProperties } from 'n8n-workflow';

export {
	ClfNodeChildNodesGetClfNode,
	ClfNodeChildNodesGetClfNodes,
	ClfNodeClassifiedObjectsGetClassifiedObject,
	ClfNodeClassifiedObjectsGetClassifiedObjects,
	ClfNodeParentNodeGetClfNode,
	FunctionGetClassificationNodeInfoWithClfNodeInternalName,
	FunctionGetClfBindingInfoWithClfStructureNameSpace,
	FunctionGetEnumTypeConstraintOnClfAttributesWithClfStructureNameSpaceAttributeInternalName,
	GetClfNode,
	GetClfNodes,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/ClfStructure',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
			},
		},
		default: 'GET /ClfNodes',
		options: [
			{
				name: 'ClfNode.ChildNodes.GetClfNode',
				value: "GET /ClfNodes('{ClfNodeId}')/ChildNodes('{ChildNodesId}')",
				description: "Get ClfNode for a given ChildNodesId - get /ClfNodes('{ClfNodeId}')/ChildNodes('{ChildNodesId}')",
				action: 'ClfNode.ChildNodes.GetClfNode',
			},
			{
				name: 'ClfNode.ChildNodes.GetClfNodes',
				value: "GET /ClfNodes('{ClfNodeId}')/ChildNodes",
				description: "Get ClfNode - get /ClfNodes('{ClfNodeId}')/ChildNodes",
				action: 'ClfNode.ChildNodes.GetClfNodes',
			},
			{
				name: 'ClfNode.ClassifiedObjects.GetClassifiedObject',
				value: "GET /ClfNodes('{ClfNodeId}')/ClassifiedObjects('{ClassifiedObjectId}')",
				description: "Get ClassifiedObject for a given ClassifiedObjectId - get /ClfNodes('{ClfNodeId}')/ClassifiedObjects('{ClassifiedObjectId}')",
				action: 'ClfNode.ClassifiedObjects.GetClassifiedObject',
			},
			{
				name: 'ClfNode.ClassifiedObjects.GetClassifiedObjects',
				value: "GET /ClfNodes('{ClfNodeId}')/ClassifiedObjects",
				description: "Get ClassifiedObject - get /ClfNodes('{ClfNodeId}')/ClassifiedObjects",
				action: 'ClfNode.ClassifiedObjects.GetClassifiedObjects',
			},
			{
				name: 'ClfNode.ParentNode.GetClfNode',
				value: "GET /ClfNodes('{ClfNodeId}')/ParentNode",
				description: "Get ClfNode - get /ClfNodes('{ClfNodeId}')/ParentNode",
				action: 'ClfNode.ParentNode.GetClfNode',
			},
			{
				name: 'Function_GetClassificationNodeInfo_With_clfNodeInternalName',
				value: "GET /GetClassificationNodeInfo(clfStructureNameSpace='{clfStructureNameSpace}',clfNodeInternalName='{clfNodeInternalName}')",
				description: "Function to get the classification attribute information for the given ClfNode. - get /GetClassificationNodeInfo(clfStructureNameSpace='{clfStructureNameSpace}',clfNodeInternalName='{clfNodeInternalName}')",
				action: 'Function_GetClassificationNodeInfo_With_clfNodeInternalName',
			},
			{
				name: 'Function_GetClfBindingInfo_With_clfStructureNameSpace',
				value: "GET /GetClfBindingInfo(oid='{oid}',clfStructureNameSpace='{clfStructureNameSpace}')",
				description: "Function to get the classification binding attribute information for the given object. - get /GetClfBindingInfo(oid='{oid}',clfStructureNameSpace='{clfStructureNameSpace}')",
				action: 'Function_GetClfBindingInfo_With_clfStructureNameSpace',
			},
			{
				name: 'Function_GetEnumTypeConstraintOnClfAttributes_With_clfStructureNameSpace_attributeInternalName',
				value: "GET /GetEnumTypeConstraintOnClfAttributes(nodeInternalName='{nodeInternalName}',clfStructureNameSpace='{clfStructureNameSpace}',attributeInternalName='{attributeInternalName}')",
				description: "Function to find valid Windchill enumerated value pairs for classification attributes. - get /GetEnumTypeConstraintOnClfAttributes(nodeInternalName='{nodeInternalName}',clfStructureNameSpace='{clfStructureNameSpace}',attributeInternalName='{attributeInternalName}')",
				action: 'Function_GetEnumTypeConstraintOnClfAttributes_With_clfStructureNameSpace_attributeInternalName',
			},
			{
				name: 'GetClfNode',
				value: "GET /ClfNodes('{ClfNodeId}')",
				description: "Get ClfNode for a given ClfNodeId - get /ClfNodes('{ClfNodeId}')",
				action: 'GetClfNode',
			},
			{
				name: 'GetClfNodes',
				value: 'GET /ClfNodes',
				description: 'Get ClfNodes - get /ClfNodes',
				action: 'GetClfNodes',
			},
		],
	},
	...ClfNodeChildNodesGetClfNode.description,
	...ClfNodeChildNodesGetClfNodes.description,
	...ClfNodeClassifiedObjectsGetClassifiedObject.description,
	...ClfNodeClassifiedObjectsGetClassifiedObjects.description,
	...ClfNodeParentNodeGetClfNode.description,
	...FunctionGetClassificationNodeInfoWithClfNodeInternalName.description,
	...FunctionGetClfBindingInfoWithClfStructureNameSpace.description,
	...FunctionGetEnumTypeConstraintOnClfAttributesWithClfStructureNameSpaceAttributeInternalName.description,
	...GetClfNode.description,
	...GetClfNodes.description,
];
