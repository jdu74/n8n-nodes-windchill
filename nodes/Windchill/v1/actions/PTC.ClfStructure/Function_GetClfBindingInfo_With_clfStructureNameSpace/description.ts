import { INodeProperties } from "n8n-workflow";

export const FunctionGetClfBindingInfoWithClfStructureNameSpaceDescription: INodeProperties[] = [
	{
		displayName: 'oid',
		name: 'oid-string(path)',
		description: 'Oid - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /GetClfBindingInfo(oid='{oid}',clfStructureNameSpace='{clfStructureNameSpace}')",
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
					"GET /GetClfBindingInfo(oid='{oid}',clfStructureNameSpace='{clfStructureNameSpace}')",
				],
			},
		},
		required: true,
	},
];
