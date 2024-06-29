import { INodeProperties } from "n8n-workflow";

export const FunctionGetClassificationNodeInfoWithClfNodeInternalNameDescription: INodeProperties[] = [
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
					"GET /GetClassificationNodeInfo(clfStructureNameSpace='{clfStructureNameSpace}',clfNodeInternalName='{clfNodeInternalName}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'clfNodeInternalName',
		name: 'clfNodeInternalName-string(path)',
		description: 'Clf Node Internal Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /GetClassificationNodeInfo(clfStructureNameSpace='{clfStructureNameSpace}',clfNodeInternalName='{clfNodeInternalName}')",
				],
			},
		},
		required: true,
	},
];
