import { INodeProperties } from "n8n-workflow";

export const FunctionGetEnumTypeConstraintOnClfAttributesWithClfStructureNameSpaceAttributeInternalNameDescription: INodeProperties[] = [
	{
		displayName: 'nodeInternalName',
		name: 'nodeInternalName-string(path)',
		description: 'Node Internal Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /GetEnumTypeConstraintOnClfAttributes(nodeInternalName='{nodeInternalName}',clfStructureNameSpace='{clfStructureNameSpace}',attributeInternalName='{attributeInternalName}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'clfStructureNameSpace',
		name: 'clfStructureNameSpace-string(path)',
		description: 'Clf Structure Name Space - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /GetEnumTypeConstraintOnClfAttributes(nodeInternalName='{nodeInternalName}',clfStructureNameSpace='{clfStructureNameSpace}',attributeInternalName='{attributeInternalName}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'attributeInternalName',
		name: 'attributeInternalName-string(path)',
		description: 'Attribute Internal Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /GetEnumTypeConstraintOnClfAttributes(nodeInternalName='{nodeInternalName}',clfStructureNameSpace='{clfStructureNameSpace}',attributeInternalName='{attributeInternalName}')",
				],
			},
		},
		required: true,
	},
];
