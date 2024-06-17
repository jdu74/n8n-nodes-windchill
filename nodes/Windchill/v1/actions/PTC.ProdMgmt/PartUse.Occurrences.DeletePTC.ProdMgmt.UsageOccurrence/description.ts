import { INodeProperties } from "n8n-workflow";

export const PartUseOccurrencesDeletePtcProdMgmtUsageOccurrenceDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UsageOccurrenceId',
		name: 'UsageOccurrenceId-string(path)',
		description: 'Usage Occurrence ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				],
			},
		},
		required: true,
	},
];
