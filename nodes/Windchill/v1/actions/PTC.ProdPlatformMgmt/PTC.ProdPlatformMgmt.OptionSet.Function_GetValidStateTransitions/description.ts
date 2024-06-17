import { INodeProperties } from "n8n-workflow";

export const PtcProdPlatformMgmtOptionSetFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
	{
		displayName: 'OptionSetId',
		name: 'OptionSetId-string(path)',
		description: 'Option Set ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
